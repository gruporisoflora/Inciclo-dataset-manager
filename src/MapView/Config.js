const dev = {
    API_URL:"172.26.112.207:8080"
}

const prod = {
    API_URL:"inciclo.us-east-2.elasticbeanstalk.com"
}

const Config = process.env.APP_STAGE == "prod"? prod:dev

export default Config