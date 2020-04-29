import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageUploader extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isUploading: false,
        imageUrl: null,
        error: null,
      };
    }
  
    setFileRef = ref => {
      this.file = ref;
    };
  
    getExtensionByImageType = imageType => {
      if (imageType === 'image/jpeg') return 'jpg';
      if (imageType === 'image/png') return 'png';
  
      return false;
    };
  
    // handleUploadFile = async () => {
    //   const { prefixFileName, onUploaded } = this.props;
  
    //   this.setState({ isUploading: true });
  
    //   const file = this.file.files[0];
    //   const randomName = getRandomName();
    //   const extension = this.getExtensionByImageType(file.type);
  
    //   try {
    //     const storageRef = firebase.storage().ref();
    //     const image = storageRef.child(`${prefixFileName}${randomName}.${extension}`);
  
    //     await image.put(file);
    //     const url = await image.getDownloadURL();
  
    //     onUploaded(url);
    //   } catch (error) {
    //     this.setState({ error: 'พบปัญญาหาขัดข้องระหว่างการอัพโหลด โปรลองใหม่อีกครั้ง' });
    //   } finally {
    //     this.setState({ isUploading: false });
    //   }
    // };
  
    handleChangeUrlField = event => {
      const url = event.target.value;
      this.setState({ imageUrl: url });
    };
  
    handleSubmitUrl = () => {
      const { onUploaded } = this.props;
      const { imageUrl } = this.state;
      onUploaded(imageUrl);
    };
  
    render() {
      const { isUploading, error } = this.state;
  
      if (error) {
        return (
          <div>
            <p className="text-danger">{error}</p>
          </div>
        );
      }
  
      return (
        <div>
          {isUploading ? (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              &nbsp;Loading...
            </>
          ) : (
            <div className="row">
              <div className="col-12 mb-2">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="upload-image"
                    ref={this.setFileRef}
                    accept=".jpg, .jpeg, .png"
                    onChange={this.handleUploadFile}
                  />
                  <label className="custom-file-label" htmlFor="upload-image">
                    เลือกไฟล์
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  
  ImageUploader.propTypes = {
    prefixFileName: PropTypes.string,
    onUploaded: PropTypes.func.isRequired,
  };
  
  ImageUploader.defaultProps = {
    prefixFileName: '',
  };
  
  export default ImageUploader;