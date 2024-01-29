import React from 'react'

// Define the type for StopWatchButtonProps
type StopWatchButtonProps = {
    type: string;

    onClick?: () => void;

};
  
  export default function StopWatchButton({type, onClick }: StopWatchButtonProps) {
    return(
        <button onClick={onClick}>{type}</button>
    )
}