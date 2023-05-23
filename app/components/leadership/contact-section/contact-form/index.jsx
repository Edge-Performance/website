import React from "react";
import Button from "@/app/components/button";

export default function ContactForm() {

  return (
        <form className="w-full sm:w-2/3">
            <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full flex items-center justify-center sm:w-auto sm:col-span-2">
                <div className="w-full">
                  <input
                    className="w-full"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
            
                </div>
              </div>
              <div className="w-full flex items-center justify-center sm:w-auto sm:col-span-1">
                <div className="w-full">
                  <input
                    className="w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
              
                  />
        
                </div>
              </div>
              <div className="w-full flex items-center justify-center sm:w-auto sm:col-span-1">
                <div className="w-full">
                  <input
                    className="w-full"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center sm:w-auto sm:col-span-2">
                <div className="w-full mb-0">
                  <textarea
                    name="message"
                    className="w-full"
                    rows="5"
                    placeholder="Message"               
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex items-center justify-center sm:w-auto sm:col-span-2 text-center">
                <div className="w-full mb-0">
                  <Button url="/contact" className="w-full sm:w-auto bg-indigo_900_ed text-white" text={"submit message"} />
                </div>
              </div>
            </div>
          </form>
  )
}


