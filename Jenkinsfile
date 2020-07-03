pipeline {
  agent any

  stages {
    stage('setup'){
      steps {
        dir('frontend') {
          sh "yarn install"
        }
      }
    }
    stage('build staging') {
      when {
        expression {env.GIT_BRANCH == 'origin/master'}
      }
      environment {
        GATSBY_API_URL = "http://backend.vactory3.lapreprod.com/"
        GATSBY_FRONTEND_URL = "https://vactory3.lapreprod.com/"
        GATSBY_ACTIVE_ENV = "development"
      }

      steps {
        dir('frontend') {
          echo "GATSBY_BACKEND_URL=${GATSBY_API_URL}"
          echo "GATSBY_FRONTEND_URL=${GATSBY_FRONTEND_URL}"
          echo "GATSBY_ACTIVE_ENV=${GATSBY_ACTIVE_ENV}"
          echo "PWD=${PWD}"
          sh "yarn workspace vactory build"
        }
      }
    }

    stage('deploy to staging'){
      when {
          expression {env.GIT_BRANCH == 'origin/master'}
      }
      steps {
        dir('frontend') {
          sh "rsync -zavhc -e ssh projects/vactory/public vactory3@41.77.119.210:/home/vactory3/public_html"
        }
      }
    }
  }
}
