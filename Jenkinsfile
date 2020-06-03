node{
    def app
    //  docker.withRegistry('https://registry.example.com', 'credentials-id') {

        def customImage = docker.build("my-image:${env.BUILD_ID}","docker-hub-credentials")

        /* Push the container to the custom Registry */
        customImage.push()
    
    
  environment {
    registry = "vishnuskrishnan/docker-test"
    registryCredential = ‘docker-hub-credentials’
  }
    
    stage('clone repositry'){
        
        checkout scm
    }
    
    // stage('Build image'){
    // def customImage = docker.build("my-image:${env.BUILD_ID}", "-f ${dockerfile} ./dockerfiles") 
    // }
    // }
    
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