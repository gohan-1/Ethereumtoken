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
        docker.build("vishnuskrishnan/docker-jenkins-pipeline:${env.BUILD_NUMBER}")
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