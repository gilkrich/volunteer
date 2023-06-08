import React from 'react'
import "./TermsOfUse.css"
import Logo from "../Components/images/logo.png"

function TermsOfUse() {
  return (
    <div className='container-terms'> 
        <div className='main-terms'>
            <div className='header-terms'>
                <img className='img-terms' src={Logo} alt="" />
                <h1><u>Our Terms:</u></h1>
            </div>
            <div className='content-terms'>
                <h3>Welcome to People4Good! By using our website and services, you agree to the following terms and conditions:</h3>
                <ol>
                    <li><u>Eligibility:</u> You must be at least 18 years old to use our website and services. By registering as a volunteer or requester, you confirm that you meet this eligibility requirement</li>
                    <li><u>Volunteer-Requester Interaction:</u> Our website serves as a platform to connect volunteers with those seeking assistance. We facilitate communication between volunteers and requesters, but we are not responsible for the interactions and outcomes that occur between them. It is the responsibility of the parties involved to ensure their own safety and satisfaction.</li>
                    <li><u>Volunteer Commitment:</u> Volunteers are expected to provide their services in a professional, responsible, and respectful manner. By volunteering through our platform, you commit to fulfilling the agreed-upon tasks to the best of your ability and adhering to any specific guidelines or instructions provided by the requester.</li>
                    <li><u>Requester Expectations:</u> Requesters should provide accurate and detailed information about their needs, including the specific task, required qualifications, and expected commitment. Requesters should treat volunteers with respect and appreciation for their time and effort.</li>
                    <li><u>Privacy and Data Protection:</u> We are committed to protecting your privacy and personal information. Any personal data you provide during the registration or use of our website will be handled in accordance with our Privacy Policy.</li>
                    <li><u>Third-Party Services:</u> Our website may contain links to third-party websites or services. We do not endorse or have control over these external sites and are not responsible for their content or practices. Your use of any third-party services is subject to their respective terms and conditions.</li>
                    <li><u>Intellectual Property:</u> All intellectual property rights, including trademarks and copyrights, related to our website and services belong to us. You are prohibited from using or reproducing any of our intellectual property without prior written consent.</li>
                    <li><u>Modifications and Termination:</u> We reserve the right to modify or terminate any aspect of our website or services at any time, without prior notice. We may also update these terms periodically, and it is your responsibility to review and comply with the most current version.</li>
                    <li><u>Limitation of Liability:</u> We strive to provide a reliable and secure platform, but we cannot guarantee the accuracy, reliability, or availability of our services at all times. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.</li>
                </ol>
                <h3>By using our website and services, you acknowledge that you have read, understood, and agreed to these terms and conditions.</h3>
            </div>
        </div>
    </div>
  )
}

export default TermsOfUse