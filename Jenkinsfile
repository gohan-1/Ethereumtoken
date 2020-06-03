node{
    def app
    
    stage('clone repositry'){
        
        checkout scm
    }
    
    stage('Build image'){
        app=docker.build('vishnuskrishnan/token')
    }
    
    // stage('test image'){
    //     app.inside(
    //         echo "testing "
    // }
    stage('push image'){
        
        docker.withregistery('https://github.com/gohan-1/Ethereumtoken.git','docker-hub-credentials')
        docker.push("$(env.BUILD_NUMBER)")
        docker.push("latest")
    }
}