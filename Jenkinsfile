pipeline {
    agent any

    environment {
        // Set NodeJS home using the name configured in Global Tool Configuration
        NODEJS_HOME = "${tool 'NodeJS 20'}"
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        APP_DIR = "/home/ubuntu/Movie-review-app" // Your application directory on EC2
        EC2_IP = "13.201.132.117" // Your EC2 public IP
        EC2_USER = "ubuntu"
        SSH_CREDENTIAL_ID = "ec2-deploy-key" // ID of the SSH credential you created in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SaiKarthik12-code/Movie-review-app.git'
                // If your repo is private and requires auth:
                // git credentialsId: 'your-github-credential-id', branch: 'main', url: 'https://github.com/SaiKarthik12-code/Movie-review-app.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install' // Install dependencies for frontend and backend
                sh 'npm run build' // Build the Next.js frontend
                // Add any build steps for your Genkit backend if it has them
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2...'
                sshagent(credentials: [SSH_CREDENTIAL_ID]) {
                    sh """
                    # Navigate to the app directory on the EC2 instance
                    ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} "cd ${APP_DIR} && \
                    # Pull latest code (if you manage code on EC2 directly and want to sync)
                    # git pull origin main && \
                    # Stop PM2 processes
                    pm2 stop all && \
                    # Install dependencies on EC2 (important for production dependencies)
                    npm install && \
                    # Rebuild the application on EC2 (critical for picking up new code)
                    npm run build && \
                    # Restart PM2 processes
                    pm2 start ecosystem.config.js && \
                    # Save PM2 state
                    pm2 save"
                    """
                }
            }
        }

        stage('Clean Workspace') {
            steps {
                cleanWs() // Clean up Jenkins workspace after successful build/deploy
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
