export const projects=[
    {
      id: 1,
      title: "Resume Builder",
      // image: "https://tse3.mm.bing.net/th?id=OIP.ubGoOZXixaF4OHwchQMvmQHaEc&pid=Api&P=0&h=220",
      description: "This project is a web application designed to streamline the CV submission process. Users fill out a form, which is processed by a Flask backend to generate a YAML CV file. This file is then combined with a design template stored in another YAML file. The resulting combined YAML file is securely uploaded to an AWS S3 bucket. The application automatically renders the CV as a PDF using a LaTeX-based engine, displaying it on a web page through an <iframe> for easy viewing. Additionally, users are provided wit S3 bucket, ensuring accessibility and convenience.",
      technology: ["Flask","AWS S3",]
    },
    {
        id         : 1,
        title      : "Employee Management System with AWS Integration",
        // image      : "https://tse2.mm.bing.net/th?id=OIP.07fRi1kyVHBdNmSb99XGFwHaFI&pid=Api&P=0&h",
        description: "Developed a Flask web application with MySQL and AWS S3 integration for managing employee information. Features include dynamic search and image uploading, demonstrating proficiency in full-stack development and cloud services.",
        technology : ["Flask", "MySQL", "AWS S3",]
      },
      {
        id: 3,
        title: "Speech-to-Text Web Application with AWS",
        // image: "https://tse3.mm.bing.net/th?id=OIP.ubGoOZXixaF4OHwchQMvmQHaEc&pid=Api&P=0&h=220",
        description: "The project is a Django web application facilitating video file transcription, utilizingAWS services like S3 for storage and Transcribe for speech-to-text conversion.Uploaded videos are stored in S3, transcribed via Transcribe, and the resulting textcontent is displayed for users to download. The application employs Django for backend development and HTML/CSS for the user interface",

        technology: ["Django","AWS S3", "AWS Transcribe",]
      },
      {
        id: 4,
        title: "NotePass",
        // image: "https://tse3.mm.bing.net/th?id=OIP.ubGoOZXixaF4OHwchQMvmQHaEc&pid=Api&P=0&h=220",
        description: "NotePass is a Django-based web application designed for securely storing notes and passwords in one place. It features strong authentication to safeguard user data and offers a user-friendly interface for easy access.",

        technology: ["Django","SQLite",]
      },
      {
        id: 5,
        title: "TodoList",
        // image: "https://tse3.mm.bing.net/th?id=OIP.ubGoOZXixaF4OHwchQMvmQHaEc&pid=Api&P=0&h=220",
        description: "TodoList is a task management web application built with the MERN stack, showcasing Docker containerization for enhanced scalability and deployment. Users can efficiently organize tasks, prioritize activities, and track progress.",

        technology: ["MERN (MongoDB, Express.js, React.js, Node.js)"," Docker", "Docker Compose",]
      },
      
                  
]
