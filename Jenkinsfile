node{
    def builtImage
    
  environment {
    registry = "vishnuskrishnan/docker-test"
    registryCredential = ‘docker-hub-credentials’
  }
    
    stage('clone repositry'){
        
        checkout scm
    }
    
    stage('Build image'){
        // docker.withregistery('','docker-hub-credentials')
         builtImage = docker.build("vishnuskrishnan/docker-jenkins-pipeline:${env.BUILD_NUMBER}")
    }
    
    
    // stage('test image'){
    //     app.inside(
    //         echo "testing "
    // }
    stage('push image'){
        // withCredentials([usernamePassword( credentialsId: 'docker-hub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {

        docker.withRegistry('', 'docker-hub-credentials') {
            // sh "docker login -u ${USERNAME} -p ${PASSWORD}"
            builtImage.push("${env.BUILD_NUMBER}")
                //   builtImage.push("${env.BUILD_NUMBER}")
                    builtImage.push("latest")
        }
        // }

      
        // docker.withregistery('https://registry.hub.docker.com','docker-hub-credentials'){
        //     dbImage = docker.build("vishnuskrishnan/docker-jenkins-pipeline:${env.BUILD_NUMBER}")
        //     dbImage.push()
        // }
        // docker.push("${env.BUILD_NUMBER}")
        // docker.push("latest")
      }
        

}