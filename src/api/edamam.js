import axios from 'axios';

axios.defaults.params = {
    app_id: 'ff4d9c67',
    app_key: '5e5860bac3cd3f0cd7fe83e5d5cf46b1'
}

export default axios.create({
    baseURL:'https://fpkgg5touj.execute-api.us-east-1.amazonaws.com/Stage',

})