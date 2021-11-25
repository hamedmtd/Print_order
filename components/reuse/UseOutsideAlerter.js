import { useEffect } from 'react'

const useOutsideAlerter = (ref, onToggle) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onToggle()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

export default useOutsideAlerter
