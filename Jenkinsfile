pipeline {
    agent any

    tools {nodejs "Node8"}

    stages {
        stage('Build'){
            steps {
                sh "echo ${BUILD_NUMBER}"
                sh "prevBuild=$(expr $BUILD_NUMBER - 1)"
                sh "echo  $(echo 'FUN YAY' && $prevBuild)"
                sh 'npm install'
            }
       }

       stage('Test'){
           steps {
                sh 'npm run test'
           }
       }

    stage('Run Code Coverage') {
        steps{
            cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/cobertura-coverage.xml', conditionalCoverageTargets: '90, 90, 90', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '90, 90, 90', maxNumberOfBuilds: 0, methodCoverageTargets: '90, 90, 90', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
        }
      }

       stage('Deploy'){
           steps {
            echo 'Serving'
           }
       }
    }
}
