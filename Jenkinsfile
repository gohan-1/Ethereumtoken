node{
    def app
    
  environment {
    registry = "vishnuskrishnan/docker-test"
    registryCredential = ‘docker-hub-credentials’
  }
    
    stage('clone repositry'){
        
        checkout scm
    }
    
    stage('Build image'){
         
    }
    
    
    // stage('test image'){
    //     app.inside(
    //         echo "testing "
    // }
    stage('push image'){
      
        docker.withregistery('https://github.com/gohan-1/Ethereumtoken.git','docker-hub-credentials')
        dbImage = docker.build("vishnuskrishnan/docker-jenkins-pipeline:${env.BUILD_NUMBER}")
        dbImage.push()
        // docker.push("latest")
      }
        

}