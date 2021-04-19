export default function ({ $axios }) {
$axios.setHeader('Accept', 'application/json')
$axios.setHeader('Authorization', 'Bearer ' + process.env.apiTokenWootbit)
}
