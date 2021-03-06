import { Component, Fragment } from "react"
import LoadingComponent from "../../utilities/LoadingComponent";
import DoctorCard from "./DoctorCard"
class HospitalCard extends Component{
  state = {
    show : false,
    doctorsList : [],
    loading : false
  }
  showHospitalData = async() => {
    if(this.state.doctorsList.length === 0){
      this.setState({loading:true})
    this.props.hospital.doctors.map((data) => 
    data.get().then((doc) => {
      let docData = doc.data();
      docData.appointments = undefined
      docData["id"] = doc.id
      this.setState((prevList)=> ({doctorsList:[...prevList.doctorsList,{
      ...docData
    }]}))})
    )
    this.setState({loading:false})
  }
  this.setState({show: !this.state.show})
    
    }
    doctors = () => (<DoctorCard doctors={this.state.doctorsList} heading={`Doctors in hospital ${this.props.hospital.name}`} />)
    
    render(){
      const {loading,show} = this.state;
      const {hospital} = this.props
    return(!loading ?
        <Fragment>
      <div
        style={{
          width: "80%",
          height: "80px",
          border: "1px solid #888",
          boxShadow: "4px 4px 4px 1px #888",
          background: "#eef",
          overflow: "hidden",
          margin: "32px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <div
            style={{ fontWeight: "500", fontSize: "1.2rem" }}
          >
            {" "}
            Name: <span>{hospital.name && hospital.name}</span>
          </div>
          <div style={{ fontWeight: "500", fontSize: "1.2rem" }}>
            {" "}
            Mobile Number : {hospital.mobileNumber}
          </div>
          <button
          onClick={this.showHospitalData}
            style={{
              padding: "8px",
              background: "rgb(0,53,128)",
              cursor: "pointer",
              border: "none",
              color: "white",
              marginTop: "8px",
            }}
          >
            select Doctor
          </button>
        </div>
        
      </div>
      {
          show && <div style={{border:'2px solid #888',width:'95%',margin:'auto'}}>
          {show && hospital && this.doctors()}
          </div>
      }
    </Fragment> : <LoadingComponent />
    )
    }
}
export default HospitalCard