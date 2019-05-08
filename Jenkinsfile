pipeline {
    agent any

    tools {nodejs "Node8"}

    stages {
        stage('Build'){
            steps {
                sh "echo ${env.BUILD_NUMBER}"
                sh "echo  ${env.prevBuild}"
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
