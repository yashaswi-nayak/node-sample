def remote = [:]
remote.name = "BFL_UAT"
remote.host = "35.229.57.74"
remote.allowAnyHosts = true

pipeline {
    agent any
    
    environment {
        CURR_VER = '$BUILD_NUMBER'
        PRE_VER  = "\$(expr $BUILD_NUMBER - 1)"
    }

    tools {nodejs "Node8"}

    withCredentials([usernamePassword(credentialsId: 'sshUserAcct', passwordVariable: 'k&#ghj#vX(-!N<@f', usernameVariable: 'root')]) {
        remote.user = userName
        remote.password = password
        
    stages {
        stage('Build'){
            steps {
                sh "echo ${env.CURR_VER}"
                sh "echo ${env.PRE_VER}"
                sh "echo  \$(echo 'FUN YAY' && echo \${env.PRE_VER})"
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
