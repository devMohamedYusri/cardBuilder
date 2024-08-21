import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode, useState } from 'react'

interface IProps{
    isOpen:boolean;
    closeModel:()=>void
    title?:string;
    children:ReactNode;
}
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟  >>>>>>>>>>>>>>>>
/**
 * This is a custom modal component that utilizes the @headlessui/react library.
 * It accepts several props, including isOpen, closeModel, title, and children.
 * isOpen is a boolean that determines whether the modal is open or closed.
 * closeModel is a function that is called when the modal is closed.
 * title is an optional string that represents the title of the modal.
 * children is a ReactNode that represents the content of the modal.
 */
export default function Modal({isOpen,closeModel,title,children}:IProps) {

    /**
     * The return statement renders the modal component.
     * The modal is wrapped in a few parent elements to handle styling and layout.
     * The modal itself is a Dialog component from @headlessui/react.
     * The Dialog component accepts several props, including open, as, className, and onClose.
     * The open prop determines whether the modal is open or closed.
     * The as prop specifies the HTML element that the Dialog component should render.
     * The className prop adds custom CSS classes to the modal.
     * The onClose prop is a function that is called when the modal is closed.
     */
    return (
        // The empty fragment is used to wrap the modal without adding an unnecessary element to the DOM.
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModel} __demoMode>
                {/* The fixed positioning ensures that the modal covers the entire screen. */}
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    {/* The flex layout is used to center the modal on the screen. */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        {/* The DialogPanel component renders the body of the modal. */}
                        <DialogPanel
                            transition
                            /** The CSS classes are added to customize the appearance of the modal. */
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {/* The DialogTitle component renders the title of the modal. */}
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                               {title}
                            </DialogTitle>
                            {/* The text below the title provides additional information to the user. */}
                            <p className="mt-2 text-sm/6 text-white/50">
                                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                                order.
                            </p>
                            {/* The children prop is the content of the modal. */}
                            <div className="mt-4">
                                {children}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
<<<<<<<  2221d346-c921-4c86-8804-e4bec0f2c464  >>>>>>>
