import EmployeeService from '../services/EmployeeService';
import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
import FooterComponent from './FooterComponent';

class UploadFile extends Component {
	state = {
	resumeList : '',
	};

	onFileChange = e => {
	this.setState({ resumeList : e.target.files[0]});
	};

	onFileUpload = async e => {
	const formData = new FormData();
	for (let resumeList in this.state) {
		formData.append(resumeList, this.state[resumeList]);
	}
	console.log(this.state.resumeList);
	EmployeeService.Upload(formData).then(res =>{
        let s=res.data;
        if(s.booleanMsg){
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Upload Successfull</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
        }
        else{
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Upload Fail, Try Again</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
        }
    });
	};

	logout = (e) => {
    e.preventDefault();
      EmployeeService.logout().then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          window.userId = "";
          window.userType = "";
          window.firstName = "";
          window.lastName = "";
          window.contact = "";
          window.sessionId = "";
          localStorage.clear();
          this.props.history.push('/Home');
        } 
        
      });
  };
  
	render() {
	
	return (
		<div>
            <div class="alert alert-info" role="alert">
            Upload only PDF Attachment 
            </div>
			<div>
				<input type="file" name = "resumeList" onChange={(e) => this.onFileChange(e)} accept="application/pdf" />
				<button type="button" class="btn btn-primary" onClick={this.onFileUpload}>Upload</button>
			</div><FooterComponent></FooterComponent>
		</div>
	);
	}
}

export default UploadFile;