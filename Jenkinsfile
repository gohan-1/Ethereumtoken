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

         docker.withRegistry('vishnuskrishnan/docker-test', 'docker-hub-credentials') {

        def customImage = docker.build("my-image:${env.BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
    // def customImage = docker.build("my-image:${env.BUILD_ID}", "-f ${dockerfile} ./dockerfiles") 
    }
    }
    
    
    // stage('test image'){
    //     app.inside(
    //         echo "testing "
    // }
    stage('push image'){
        
        docker.withregistery('https://github.com/gohan-1/Ethereumtoken.git','docker-hub-credentials')
        docker.push("${env.BUILD_NUMBER}")
        docker.push("latest")
    }
}