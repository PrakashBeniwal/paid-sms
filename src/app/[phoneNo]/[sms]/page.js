// "use client"
import axios from 'axios';
import styles from './index.module.scss'
const Index =async (props) => {
    const getSms = async () => {

        const options = {
            method: 'GET',
            url: 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/view-messages',
            params: {
                countryId: props.params.phoneNo,
                number: props.params.sms
            },
            headers: {
                'X-RapidAPI-Key': '383f65feecmsh59fae3a633215d3p10f0d8jsn7b28af12b30e',
                'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }


    const sms=await getSms()

    return (
        <div className={styles.sms}>
            
            <div className={styles.mess} >
                {
                    sms.map((s,i)=>{
                        return(
                        <div style={{color:"white"}} key={i}>
                           {s.text}
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Index