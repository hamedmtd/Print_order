import React from 'react'
import { store } from 'react-notifications-component'
import queryString from 'query-string'
import Swal from 'sweetalert2'
import xhr from './xhr'

export function GetParams(location, param) {
    if (typeof (location !== 'undefined')) {
        const values = queryString.parse(location.search)
        return values[param]
    } else {
        return ''
    }
}

export function Alert(title, type = 'success', timer = 1500) {
    Notif(title, type === 'danger')
}

export function Confirm(title, description, response, confirmedText = 'Yes', type = 'warning', backdrop = true) {
    Swal.fire({
        // title: title,
        // text: description,
        // icon: type,
        customClass: {
            popup: 'p-0',
            content: 'p-0',
            actions: 'pt-0 mt-0 pb-3 sm:flex sm:flex-row-reverse px-3 justify-end items-end',
            confirmButton: 'text-sm mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm',
            cancelButton: 'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm',
        },
        confirmButtonColor: '#DC2626',
        confirmButtonText: confirmedText,
        cancelButtonColor: '#D1D5DB',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        allowOutsideClick: backdrop,
        allowEscapeKey: backdrop,
        html:
            `<div class='inline-block align-bottom bg-white rounded-lg xs:px-4 xs:pt-5 xs:pb-4 text-left overflow-hidden
             transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:pb-2'>
             <div class='sm:flex sm:items-start space-x-3'>
             <div class='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${type === 'warning' ? 'bg-red-100' : 'bg-green-100'} sm:mx-0 sm:h-10 sm:w-10'>
            ${type === 'warning' ?
                `
                <svg class='h-6 w-6 text-red-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                </svg>
                `
                :
                `
                <svg class='h-6 w-6 text-green-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                `
            }
            </div>
            <div class='flex-1 xs:mt-3 xs:text-center sm:mt-0 sm:ml-4 sm:text-left'>
            <h3 class='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
              ${title}
            </h3>
            <div class='mt-2'>
              <p class='text-sm text-gray-500'>
                ${description}
              </p>
            </div>
          </div>
        </div>
      </div>`
    }).then((result) => {
        if (result.value) {
            response()
        }
    })
}

const CustomNotification = (title, danger) => {
    return (
        <div
            className='w-full h-full bg-white border rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden '>
            <div className='p-3'>
                <div className='flex items-center justify-center '>
                    {danger ?
                        <svg className='h-9 w-9 text-red-400' xmlns='http://www.w3.org/2000/svg' fill='none'
                            viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        :
                        <svg className='h-9s w-9 text-green-400' xmlns='http://www.w3.org/2000/svg' fill='none'
                            viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    }
                    <div className='ml-3 w-0 flex-1'>
                        <span className='text-sm font-semibold text-gray-700'>
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Notif(title, is_danger = false, time = 3) {
    store.addNotification({
        title: title,
        // width: 500,
        content: (CustomNotification(title, is_danger)),
        message: title,
        insert: 'top',
        container: 'top-center',
        animationIn: ['animate__animated animate__fadeIn'], // `animate.css v4` classes
        animationOut: ['animate__animated animate__fadeOut'],
        dismiss: {
            duration: time * 1000,
            pauseOnHover: true,
            waitForAnimation: true,
        },
        dismissable: {
            waitForAnimation: true,
            click: true
        },
        slidingExit: {
            duration: 800,
            timingFunction: 'ease-out',
            delay: 0
        },
        touchSlidingExit: {
            swipe: {
                duration: 400,
                timingFunction: 'ease-out',
                delay: 0,
            },
            fade: {
                duration: 400,
                timingFunction: 'ease-out',
                delay: 0
            }
        }
    })
}

export function ClassNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function NumberFromText(text) {
    // numberFromText('AA')
    const charCodes = text
        .split('') // => ['A', 'A']
        .map(char => char.charCodeAt(0)) // => [65, 65]
        .join('') // => '6565'
    return charCodes
}

export async function Print(props) {
    const printJS = (await import('print-js')).default
    printJS(props)
}

export function CopyToClipBoard(text) {
    return new Promise((resolve, reject) => {
        /* Get the text field */
        let textField = document.createElement('textarea')
        textField.innerText = text.trim()
        document.body.appendChild(textField)
        /* Select the text field */
        textField.select()
        textField.setSelectionRange(0, 99999) /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand('copy')
        /* Alert the copied text */
        textField.remove()
        resolve()
    })
}

export const GetColorCode = (color) => {
    switch (color) {
        case 'bluenavy':
            return '#1A4BFF'
        case 'pink':
            return '#EC4899'
        case 'indigo':
            return '#6366F1'
        case 'yellow':
            return '#F59E0B'
        case 'green':
            return '#10B981'
        case 'lime':
            return '#84CC16'
        case 'magenta':
            return '#EB70D0'
        case 'gray':
            return '#6b7280'
        case 'blue':
            return '#3b82f6'
        case 'lighblue':
            return '#41c5ff'
        case 'purple':
            return '#8b5cf6'
        case 'red':
            return '#ef4444'
    }
}

export const GetType = (filename) => {
    try {
        return filename.split('.').pop()
    } catch (e) {
        return ''
    }
}

export const FileIcon = (filename) => {
    const type = getType(filename)
    switch (type) {
        case 'pdf':
            return '/images/file_icon/pdf.svg'
        case 'zip':
            return '/images/file_icon/zip.svg'
        case 'xlsx':
            return '/images/file_icon/xls.svg'
        case 'xls':
            return '/images/file_icon/xls.svg'
        case 'ppt':
            return '/images/file_icon/ppt.svg'
        case 'pptx':
            return '/images/file_icon/ppt.svg'
        case 'csv':
            return '/images/file_icon/csv.svg'
        case 'text':
            return '/images/file_icon/text.svg'
        case 'txt':
            return '/images/file_icon/text.svg'
        case 'doc':
            return '/images/file_icon/doc.svg'
        case 'docx':
            return '/images/file_icon/doc.svg'
        case 'png':
            return '/images/file_icon/png.svg'
        case 'jpeg':
            return '/images/file_icon/jpg.svg'
        case 'jpg':
            return '/images/file_icon/jpg.svg'
        case 'gif':
            return '/images/file_icon/gif.svg'
        case 'bmp':
            return '/images/file_icon/bmp.svg'
        case 'tiff':
            return '/images/file_icon/tiff.svg'
        case 'mp4':
        case 'flv':
        case 'mkv':
        case '3gp':
            return '/images/file_icon/mp4.svg'
        case 'mp3':
            return '/images/file_icon/mp3.svg'
        default:
            return '/images/file_icon/unknown.svg'
    }
}

export const GetCompliance = (country, res) => {

    new xhr(`countries/${country}`, {}, {}).Get(response => {
        switch (response.data.name) {
            case 'Canada':
                res({
                    'accredited_investor': 'Accredited Investor',
                    'retail_client': 'Retail Client',
                })
                break
            case 'United States':
                res({
                    'accredited_investor': 'Accredited Investor',
                    'retail_client': 'Retail Client',
                    'qualified_purcheser': 'Qualified Purcheser',
                })
                break
            case 'France':
            case 'Greece':
            case 'Italy':
            case 'Belgium':
            case 'Ireland':
            case 'Bulgaria':
            case 'Denmark ':
            case 'Croatia (Hrvatska)':
            case 'Czech Republic':
            case 'Cyprus':
            case 'Austria':
            case 'Latvia':
            case 'Slovakia':
            case 'Luxembourg':
            case 'Hungary':
            case 'Netherlands The':
            case 'Norway':
            case 'Malta':
            case 'Poland':
            case 'Slovenia':
            case 'Spain':
            case 'Sweden':
            case 'Lithuania':
            case 'Estonia':
            case 'Romania':
            case 'United Kingdom':
                res({
                    'professional_client': 'Professional Client',
                    'eligible_counterparty': 'Eligible Counterparty',
                    'retail_client': 'Retail Client',
                })
                break
            case 'Germany':
                res({
                    'professional_client': 'Professional Client',
                    'eligible_counterparty': 'Eligible Counterparty',
                    'retail_client': 'Retail Client',
                    'semi_professional_client': 'Semi professional client',
                })
                break
            case 'Switzerland':
                res({
                    'institutional_client': 'Institutional Client',
                    'professional_client': 'Professional Client',
                    'retail_client': 'Retail Client',
                })
                break
            case 'Singapore':
                res({
                    'professional_client': 'Professional Client',
                    'accredited_investor': 'Accredited Investor',
                    'other': 'Other',
                })
                break
            case 'Hong Kong S.A.R.':
                res({
                    'professional_client': 'Professional Client',
                    'accredited_investor': 'Accredited Investor',
                    'other': 'Other',
                })
                break
            default:
                res({
                    'professional_client': 'Professional Client',
                    'retail_client': 'Retail Client',
                })
                break
        }
    })
}

export function FileSizeExtension(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const Hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha})`
}
