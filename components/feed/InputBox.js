import {useSession } from "next-auth/client";
import Image from 'next/image'; 
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon,VideoCameraIcon } from "@heroicons/react/solid";
import {useRef} from 'react';
import { db } from "../../firebase";
import firebase from 'firebase';


const InputBox = () => { 
    const [session] = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);

    const sendPost = (e) => {
        e.preventDefault();

        if(inputRef.current.value) {
            db.collection('posts').add({
                message:inputRef.current.value,
                name: session.user.name,
                email:session.user.email,
                image:session.user.image,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            inputRef.current.value = ""
        }else {
            return
        }
    };

    const addImageToPost = (e) => {
        
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6 font-medium' >
            <div className='flex space-x-4 p-4 items-center' >
              <Image
               className='rounded-full'
               src={session.user.image}
               width={40}
               height={40}
               layout='fixed'
              />
              <form className='flex flex-1' >
                 <input
                 ref={inputRef}
                 className='rounded-full h-10 bg-gray-100 flex-grow px-5 outline-none'
                 placeholder={`What's on your mind, ${session.user.name}?`}
                 type='text'
                  /> 
                  <button
                  type='submit'
                   hidden
                    onClick={sendPost} > 
                      Submit
                  </button>
              </form>
            </div>
            <div className='flex justify-evenly p-3 border-t' >
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className='text-xs sm:text:sm xl:text-base' >Live Video</p>
                </div>

                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300'/>
                    <p className='text-xs sm:text:sm xl:text-base' >Photo/Video</p>
                    <input 
                    ref={filepickerRef}
                    onChange={addImageToPost}
                    type='file'
                     hidden /> 
                </div>


                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400'/>
                    <p className='text-xs sm:text:sm xl:text-base' >Feeling/Activity</p>
                </div>

              



            </div>
         
        </div>
    )
}

export default InputBox;
