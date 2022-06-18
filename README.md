# PROCTIFY - Movement as Cure

<b>Procify</b> is a progressive web app made for <b>Google Solution Challenge 2022</b>

The United Nations’ Sustainable Development goal that we are trying to solve is: “Good Health and Wellbeing”.
	
The Healthcare sector is one of the world's largest sectors, both in terms of employment and revenue generated. Although recent advancements in healthcare have propelled this sector to new heights, there are still big loopholes to fill when it comes to niche industries like physiotherapy.

# Index
- <a href="#overview"> Overview <a>
- <a href="#ps"> Problem Statement <a>
- <a href="#solution"> Our Solution <a>
- <a href="#usecase"> Use Case Diagram <a>
- <a href="#features"> Features <a>
- <a href="#tools"> Tools Used <a>
- <a href="#techStack"> Tech Stack <a>
- <a href="#libraries"> Libraries Used <a>
- <a href="#setup"> Setup and Installation <a>
- <a href="#future"> Future Scope <a> 

<p id="overview"><p>

# Overview

Proctify is a virtual assistant that eradicates the distance between you and your physiotherapist, removing the need and hassle of redundant physical appointments, reducing the cost and the mental trauma they may lead to. Now you’re not limited to any available doctor nearby and can have appointments with therapists of your choice across the globe.

# Why Physiotherapy ?

Physiotherapy remains one of the most neglected domains in the entire medical sector, especially in India, today 80% of our population requires physiotherapy in some or other form.
India has only 0.59 physiotherapists per 1000 patients, against a global average of 1.04.
This grave situation turns even more horrible because many people in India hesitate to associate themselves with any form of therapy, both mental and physical.Even when the patient willingly consults a physiotherapist, their mental turmoil doesn't stop there.

There is an urgent need to refine and redevelop methods in which physiotherapy is practiced.

<p id="ps"><p>

# Problem Statement

These are some of the problems we wish to tackle using Proctify :

- <b>Redundant Appointments :</b> During the course of treatment, the patient is expected to visit the physiotherapist several times for updates on progress, pain levels
  and new exercises. This cycle of redundant appointments is physically tiring and leaves a trail of mental turmoil and hassle.

- <b>Lack of a feedback system :</b> The physiotherapist instructs the patient to perform certain exercises at home during the recovery period. The problem with this
  system is that there are no checks and balances to monitor and verify whether the patient is performing the exercises correctly, or if the exercises are even being performed or not.

- <b>High cost of treatment :</b> Physiotherapy is a neglected field worldwide, that coupled with a doctor-to-patient ratio as critically low as 0.59:1000 results in very
  high treatment costs which is a big burden for middle-class families. It is a major reason why a big proportion of the patients drop out of treatment or start self-treating themselves.

- <b>High drop-out rates :</b> The nature of treatment in fields like physiotherapy leads to a substantially high drop-out rate. Patients seek immediate results, need to compromise in their lifestyle and also suffer mentally during the course of the treatment. All this accumulates to them dropping out of therapy and maybe even further aggravating their injuries in the future .

The amalgam of the above written and many more factors is what we wish to dampen using Proctify. 

<p id="solution"><p>

# Solution

These are the ideas we came up with while working on the solution:
- Proctify maintains  the count of important metrics like reps, sets and joint angles, which enables us to track the user’s daily progress.
- Not only do we track the patient while he/she performs exercise, but also make sure that the exercise is performed in the correct manner.
- We provide a realtime dashboard that provides patients the timely feedback regarding their progress
- Doctor's can check on their patient's progress by viewing their dashboards.
- New exercises can be added seamlessly by the physiotherapists by just filling a form.
- Patients can directly interact with physiotherapists using our Video Calling feature

<p id="usecase"><p>

# Use-Case Diagram

<img width = 600px src = https://github.com/topguns837/proctify_readme/blob/master/assets/use_case.jpeg>

<p id="features"><p>

# Features
- <b>Reps/Sets Counter :</b> We use Mediapipe, which is a pose estimation library to maintain counters for reps, sets, daily joint angle range etc for each exercise.

- <b>Dashboard :</b> All the metrics related to the exercise is plotted on a dashboard, through which the patients can monitor their progress and keep a check on their
  consistency.

- <b>Self designed SVG's and Tutorials :</b> Proctify includes a gallery of self-designed SVG's and tutorials which helps in easier understanding of exercise
	
- <b>Voice Cues :</b> Procitfy comes with voice cues inbuilt, which helps the user while performing the exercise to keep  track of the no. of sets and reps. We have also added warnings if a user performs the exercise too slow.

- <b>Doctor's Portal :</b> We have implemented a seperate portal for doctors, through which they can track their patient's progress, add new exercises and setup prescriptions for their patients.

- <b>Seamless connection between Doctor and Patient :</b> Doctors and patients can connect through Proctify by scanning a QR code provided at the Doctor's portal.

- <b>Video Calling :</b> We have an inbuilt video calling feature through which Doctors and Patients can converse.


<p id="techStack"><p>
	
# Tech Stack used

- <b>PWA :</b> Our project utilises the concept of PWA or Progressive Web Applications to
  provide users with a faster, more reliable, and more engaging version of our website

- <b>React.js :</b> The front-end and user interactive features of the application have been
  programmed completely in react.js and Material UI

- <b>Firebase :</b> Functionalities like user authentication, data storage and retrieval
  through Firebase's in-built API's and web hosting has been done through Firebase

<p id="tools"><p>

# Tools Used

- <b>Canva :</b> We used Canva for designing our app's logo and formulating the process flow.

- <b>Figma :</b> We have used Figma for creating wireframes and designing SVG's.

- <b>Agora :</b> Agora is a realtime engagement platform. We have used it to implement our video calling feature.

<p id="libraries"><p>

# Libraries Used

- <b>Charts.js :</b> We have used Charts.js for plotting the user's progress on a real-time dashboard .

- <b>Mediapipe :</b> Mediapipe is an open source pose estimation library by Google. We are using mediapipe to obtain the Cartesian coordinates of various joints in the user's body. We further manipulate this data and perform Vector Algebra on these coordinates to obtain various metrics like daily angle range, no. of reps/
  sets etc.

- <b>qrcode and qrcode reader :</b> These libraries have been used to estabilish a connection between physiotherapists and patients throught QR codes.
 

<p id="setup"><p>

# Setup and Installation

## Pre-Requisites : 
- **Node js and npm :** Refer to the [official documentation](https://nodejs.org/en/download/) for installation of Node.
- **Git :** Refer to the [official documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for installation of git.
<br>

## Clone the Proctify repository

### Execute the given command in your terminal/command prompt to clone the project :\

#### If you use SSH links : 

```bash
git clone  git@github.com:wasp0094/react-pwa-new.git
```

#### If you use HTTPS links :

```bash
git clone  https://github.com/wasp0094/react-pwa-new.git
```
<br>
  
## Start the app

### Execute the given command to install project dependencies 

```bash
npm i
```

### The following command will compile the codebase and start the Web App in your localhost. It may take 2-3 min to start first time

```bash
npm start
```
  
**Inportant :** For users using our app on a desktop / laptop, we suggest you view the app in dimensionally responsive mode or  406 X 860 for the best user experience.

<p id="future"><p>

# Future Scope

- <b>Exercise Reminder :</b> Remind the patient of pending exercises before end of day.

- <b>Checks against cheating :</b> This feature can include checks for presence of a person in front of the camera during the whole duration
  of the exercise, user authentication and much more. 

- <b>Customizable exercises and add them during runtime :</b> We have currently provided physiotherapists with the option of adding new exercises by filling
  a form, but it requires us to step in between and code the new exercise. This process is time consuming and hardly automated, we wish to provide doctors with the feature of adding new exercises in the runtime only 

- <b>In-App Doctor Appointment :</b>  Our aim is to make this app a one stop solution for physiotherapy treatment and thus provide a feature related to booking of appointments  
  using our app only. 

# Snapshots of the interface
	
![proctify-collage](https://user-images.githubusercontent.com/90551491/174430971-e44b64bd-3bd6-42b5-b8e9-958bed157002.png)
	
## Demo Video  : https://www.youtube.com/watch?v=1h4rIkbJW5U
