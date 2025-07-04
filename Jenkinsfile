pipeline {
    agent any

    environment {
        NODEJS_HOME = "${tool 'NodeJS 20'}"
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        APP_DIR = "/home/ubuntu/Movie-review-app"
        EC2_IP = "13.201.132.117"
        EC2_USER = "ubuntu"
        SSH_CREDENTIAL_ID = "ec2-deploy-key"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SaiKarthik12-code/Movie-review-app.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2...'
                sshagent(credentials: [SSH_CREDENTIAL_ID]) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} "cd ${APP_DIR} && \
                    git pull origin main && \
                    pm2 stop all && \
                    npm install && \
                    npm run build && \
                    pm2 start ecosystem.config.js && \
                    pm2 save"
                    """
                }
            }
        }

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
