pipeline {
  agent any

  tools {
    nodejs 'Nodejs-20'
  }

    stages {
      stage('clone repository') {
        steps {
          git 'https://github.com/Emaina98/gallery.git'
        }
      }

      stage('installing dependancies') {
        steps {
          sh 'npm install'
        }
      }

      stage('Testing') {
        steps {
          sh 'npm test'
        }
      }
      stage('Deploying') {
        steps {
          sh 'npm deploy'
        }
      }
      stage('slack') {
        steps {
          slackSend message: 'test message'
        }
      }
    }
    post {
    success {
      echo 'send test message'
    }
    failure {
      echo'send'
    }
    }
}
