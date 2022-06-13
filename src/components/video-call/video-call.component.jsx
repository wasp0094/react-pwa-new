/* eslint-disable react-hooks/exhaustive-deps */
import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import BottomNav from "../bottom-nav/bottom-nav.component";

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
      "0066327b8a6d2ae4726b109d98d33fcbcc0IAA8C3p2ZssQRvOMB3vCivYhtgxsZM4byf59noLRI7m1ZQx+f9gAAAAAEAA9DfJziUafYgEAAQCIRp9i",
    uid: user.id,
  };

  // useSetTitle("Video Chat");
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
    const videoCallDiv = document.getElementById("video-call");
    videoCallDiv.appendChild(localPlayerContainer);
    localPlayerContainer.id = options.uid;
    // localPlayerContainer.textContent = "You ";
    localPlayerContainer.style.width = "85vw";
    localPlayerContainer.style.height = "35vh";
    localPlayerContainer.style.marginBottom = "5px";
    rtc.localVideoTrack.play(localPlayerContainer);
    console.log("publish success!");
  };

  const handleLeave = async () => {
    rtc?.localAudioTrack?.close();
    rtc?.localVideoTrack?.close();
    const playerContainerr = document.getElementById(user.uid);
    console.log(playerContainerr);
    console.log(playerContainerr);
    playerContainerr && playerContainerr.remove();
    rtc.client.remoteUsers.forEach((user1) => {
      const playerContainer = document.getElementById(user1.uid);
      playerContainer && playerContainer.remove();
    });
    await rtc.client.leave();
  };

  const temp = async () => {
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    rtc.client.on("user-published", async (user, mediaType) => {
      await rtc.client.subscribe(user, mediaType);
      console.log("subscribe success");
      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        const remotePlayerContainer = document.createElement("div");
        const videoCallDiv = document.getElementById("video-call");
        videoCallDiv.appendChild(remotePlayerContainer);
        remotePlayerContainer.id = user.uid.toString();
        // remotePlayerContainer.textContent =
        //   "Remote user " + user.displayName
        remotePlayerContainer.style.width = "85vw";
        remotePlayerContainer.style.height = "35vh";
        remotePlayerContainer.style.paddingBottom = "5px";
        remotePlayerContainer.style.padding = "0 auto";
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

  useEffect(() => {
    temp();
    return handleLeave;
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Video Call Room</h2>
        <div className="row">
          <div className="video-calll">
            <button
              style={{
                margin: "0.5rem",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "green",
                color: "white",
                fontSize: "0.8rem",
              }}
              type="button"
              onClick={handleJoin}
            >
              <CallIcon /> JOIN CALL
            </button>
            <button
              style={{
                margin: "0.5rem",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "red",
                color: "white",
                fontSize: "0.8rem",
              }}
              type="button"
              onClick={handleLeave}
            >
              <CallEndIcon /> LEAVE CALL
            </button>
          </div>
          <div
            id="video-call"
            style={{
              paddingLeft: "46px",
              paddingRight: "41px",
            }}
          ></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default VideoCall;
