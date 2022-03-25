import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

function VideoCall() {
  let rtc = {
    localAudioTrack: null,
    localVideoTrack: null,
    client: null,
  };
  const { user } = useUserAuth();
  let options = {
    appId: "666ea125b0b0446f8c418d03e7b62196",
    channel: "test",
    token:
      "0066327b8a6d2ae4726b109d98d33fcbcc0IAAWdie6N5/kGLtHEX2flqxCzgtT8HqMRKg/js8uZ+itZwx+f9gAAAAAEAAg4mLWoW0/YgEAAQCjbT9i",
    uid: user.id,
  };

  const handleJoin = async () => {
    console.log(rtc);
    await rtc.client.join(
      options.appId,
      options.channel,
      options.token,
      options.uid
    );
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
    const localPlayerContainer = document.createElement("div");
    localPlayerContainer.id = options.uid;
    localPlayerContainer.textContent = "Local user " + options.uid;
    localPlayerContainer.style.width = "4rem";
    localPlayerContainer.style.height = "3rem";
    document.body.append(localPlayerContainer);
    rtc.localVideoTrack.play(localPlayerContainer);
    console.log("publish success!");
  };

  const handleLeave = async () => {
    rtc.localAudioTrack.close();
    rtc.localVideoTrack.close();
    rtc.client.remoteUsers.forEach((user) => {
      const playerContainer = document.getElementById(user.uid);
      playerContainer && playerContainer.remove();
    });
    await rtc.client.leave();
  };

  useEffect(() => {
    const temp = async () => {
      rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      rtc.client.on("user-published", async (user, mediaType) => {
        await rtc.client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === "video") {
          const remoteVideoTrack = user.videoTrack;
          const remotePlayerContainer = document.createElement("div");
          remotePlayerContainer.id = user.uid.toString();
          remotePlayerContainer.textContent =
            "Remote user " + user.uid.toString();
          remotePlayerContainer.style.width = "4rem";
          remotePlayerContainer.style.height = "3rem";
          document.body.append(remotePlayerContainer);
          remoteVideoTrack.play(remotePlayerContainer);
        }
        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }
        rtc.client.on("user-unpublished", (user) => {
          const remotePlayerContainer = document.getElementById(user.uid);
          remotePlayerContainer.remove();
        });
      });
    };
    temp();
  }, []);

  return (
    <div>
      <h2 className="left-align">Agora Video Web SDK Quickstart</h2>
      <div className="row">
        <div>
          <button type="button" onClick={handleJoin}>
            JOIN
          </button>
          <button type="button" onClick={handleLeave}>
            LEAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
