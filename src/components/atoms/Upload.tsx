import { useFormikContext } from 'formik';
import React, { useState } from 'react';
type ImageCustom_TP = {
    className?: string;
    type?: string;
    handleChange?: any;
    value?: any;
    name?: any;
};
const Upload = ({ className, value, name, type, handleChange, ...props }: ImageCustom_TP) => {
    const { values, setFieldValue } = useFormikContext();
    const [currentImage, setCurrentImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState<any>('');
    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        setCurrentImage(selectedFiles?.[0]);
        setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
        setFieldValue(name, selectedFiles?.[0]);


    };


    // document.getElementByName(name)?.addEventListener("input", function() {
    //     document.getElementById(name)?.innerHTML = `
    //         <img src="${window.URL.createObjectURL(document.getElementById("facebookImg")?.files[0])}" alt="facebookdImg">
    //         `;
    // })


    return (
        <>
            <input
                className="mb-3 form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:rounded-s-lg file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary"
                name={name}
                type="file"
                accept="image/*"

                onChange={selectImage}
            />
            {previewImage ? (
                <div>
                    <img className="preview w-[50%] m-auto" src={previewImage} alt="" />
                </div>
            ) : (
                <div>
                    <img className="preview w-[50%] m-auto" src="/assets/images/file-preview.svg" alt="" />
                </div>
            )}
        </>
    );
};

export default Upload;
