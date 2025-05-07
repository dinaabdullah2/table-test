import Swal, { SweetAlertIcon } from 'sweetalert2';
import { useState } from 'react';

let value: string;
let x: string;

function showAlert(
    tit?: string,
    text_inpL?: string,
    inp?: boolean,
    confirm_btn_txt?: string,
    show_cancel?: boolean,
    type?: SweetAlertIcon,
    action?: () => void,
): Promise<string | null> {
    return new Promise((resolve) => {
        if (!inp) {
            Swal.fire({
                icon: type,
                title: tit,
                text: text_inpL,
                showCancelButton: show_cancel,
                confirmButtonText: confirm_btn_txt,
                padding: '2em',
                customClass: 'sweet-alerts',
            }).then((result) => {
                if (result.value) {

                    resolve(result.value)
                    value = result.value;
                    x = value;
                    if (action) {
                        action();
                    }
                }
            });
        } else {
            Swal.fire({
                title: tit,
                input: 'text',
                inputLabel: text_inpL,
                confirmButtonText: confirm_btn_txt,
                inputPlaceholder: 'Enter your new event',
            }).then((result) => {
                if (result.value) {
                    console.log( result.value,'s')
                    resolve(result.value);
                } else {
                    resolve(null);
                }
            });
        }
    });

    // return value;
}

export default showAlert;
