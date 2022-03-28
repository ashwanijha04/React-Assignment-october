import React from "react"
import image from "../images/1.png"

export default class ProfileCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // name: "Leanne Graham",
            // email: "sincere@april.biz",
            // phone: "9123123123",
            // website: "blah.com ",
            isLiked: false
        }
        this.editProfile = this.editProfile.bind(this);
    }

    editProfile() {
        alert("Edit cl");
    }

    showForm = () => {
        return (
            <div>
                <form id="edit-profile">

                </form>
            </div>
        )
    }

    render(){

        return (
            <div className="profileCard">

                <div className="profileImage">
                    <img src={image}/>
                </div>

                <div className="profileDetails">
                    <h5 className="name">
                        {this.props.name}
                    </h5>

                    <div>
                    <i class="fa-solid fa-envelope"></i>
                        <p> {this.props.email} </p>
                        <p> {this.props.phone} </p>
                        <p> {this.props.website} </p>
                    </div>

                </div>

                <div className="profileActions">

                {this.state.isLiked?<p>Liked</p>: <p>Not liked</p>}
                <button onClick={()=>this.setState({isLiked: !this.state.isLiked})}>Like</button>
                <button onClick={()=>this.editProfile()}>Edit</button>
                <button>Delete</button>
                </div>

            </div>
        )
    }
}