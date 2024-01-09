/* eslint-disable react/prop-types */

export default function MaxWidthWrapper({ children }) {
    return (
        <div className="mx-auto w-full max-w-screen-2xl px-8  ">
            {children}
        </div>
    )
}
