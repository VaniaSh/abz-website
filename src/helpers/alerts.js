import Swal from 'sweetalert2';
import img from '../assets/success-image.svg'


export const AlertError = ({text}) => {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
    });
};export const AlertSuccess = ({text}) => {
    return Swal.fire({
        icon: 'success',
        title: 'Copied successful',
        text: text,

    });
};
export const ImageAlert = ({text}) => {
    return Swal.fire({
        title: 'Success',
        text: text,
        imageUrl: img,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
};

export const alert: {
   image: (data) => Promise<SweetAlertResult>;
    error: (data) => Promise<SweetAlertResult>;
    success: (data) => Promise<SweetAlertResult>;
} = {
    error: AlertError,
    success: AlertSuccess,
    image: ImageAlert,

};