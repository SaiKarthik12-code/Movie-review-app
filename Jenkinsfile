pipeline {
    agent any

    environment {
        // Set NodeJS home using the name configured in Global Tool Configuration
        NODEJS_HOME = "${tool 'NodeJS 24.3.0'}" // Ensure this name matches your Jenkins Global Tool Configuration
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"

        // !! IMPORTANT: Replace these placeholders with your actual values !!
        APP_DIR = "/home/ubuntu/Movie-review-app" // The absolute path to your app's root on the EC2 instance
        EC2_IP = "13.127.102.201" // Your EC2 Public IP address
        EC2_USER = "ubuntu" // The SSH username for your EC2 instance (usually 'ubuntu' for Ubuntu AMIs)
        SSH_CREDENTIAL_ID = "ec2-deploy-key" // The ID of the SSH credential you created in Jenkins

        // Define the source directory on the Jenkins agent's workspace
        JENKINS_WORKSPACE_APP = "${WORKSPACE}" // Points to the root of the checked-out repository
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SaiKarthik12-code/Movie-review-app.git'
                // If your GitHub repo is private and requires Jenkins credentials, use:
                // git credentialsId: 'your-github-credential-id', branch: 'main', url: 'https://github.com/SaiKarthik12-code/Movie-review-app.git'
            }
        }

        stage('Install Dependencies & Build (on Jenkins Agent)') {
            steps {
                echo 'Installing dependencies and building application on Jenkins agent...'
                sh 'npm install' // Install dependencies in the Jenkins workspace
                sh 'npm run build' // Build the Next.js frontend in the Jenkins workspace
                // Add any build steps for your Genkit backend if it has them
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying built application to EC2...'
                sshagent(credentials: [SSH_CREDENTIAL_ID]) {
                    // Stop PM2 processes and clear the existing application directory on EC2
                    sh "ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} 'pm2 stop all; rm -rf ${APP_DIR}/*; mkdir -p ${APP_DIR}'"

                    // Use rsync to efficiently copy the built application from Jenkins workspace to EC2
                    // -a: archive mode (preserves permissions, ownership, etc.)
                    // -v: verbose output
                    // -z: compress file data during transfer
                    // --delete: delete extraneous files from dest dir (ensures old files are removed)
                    // --exclude=node_modules: exclude node_modules from transfer (we'll install prod only on EC2)
                    // --exclude=.git: exclude .git directory
                    sh "rsync -avz --delete --exclude=node_modules --exclude=.git ${JENKINS_WORKSPACE_APP}/ ${EC2_USER}@${EC2_IP}:${APP_DIR}/"

                    // After copying, install only production dependencies on EC2
                    // Then restart PM2 processes and save state
                    sh """
                    ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} "cd ${APP_DIR} && \
                    npm install --production && \
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
            echo 'Deployment failed! Check logs for details.'
        }
    }
}
