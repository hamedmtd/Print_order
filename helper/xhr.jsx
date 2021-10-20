// import axios from 'axios'
// import { Notif } from './functions'

// export default class xhr {
//     constructor(url, data, init, notif = false, notif_time = 1) {
//         this.url = url
//         this.data = data || {}
//         this.init = init
//         this.notif = notif
//         this.danger_notif = true
//         this.notif_time = notif_time
//         this.config_data()
//         // this.base_url = 'http://192.168.1.187:4000/' + url
//         this.base_url = axios.defaults.baseURL + url
//         this.time_out = 20000
//         this.maxRedirects = 2
//         let CancelToken = axios.CancelToken || ''
//         this.source = CancelToken.source() || ''
//         this.headers = {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }

//         if (axios.defaults.app_version) {
//             this.headers['App-Version'] = `${axios.defaults.app_version}`
//         }
//         this.method = null
//     }

//     Get(xhr_response, err = null, prgDownload = null, prgUpload = null) {
//         this.method = 'get'
//         try {
//             axios({
//                 method: 'get',
//                 params: this.data,
//                 url: this.base_url,
//                 responseType: 'json',
//                 timeout: this.time_out,
//                 headers: this.headers,
//                 maxRedirects: this.maxRedirects,
//                 withCredentials: true,
//                 credentials: 'same-origin',
//                 onDownloadProgress: prgDownload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     prgDownload(progress)
//                 } : null,
//                 onUploadProgress: prgUpload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     prgUpload(progress)
//                 } : null
//             }).then((response) => {
//                 if (response) {
//                     let responseData = response.data
//                     this.log('RESPONSE GET ' + this.url + ' :::  data response = ', responseData)
//                     if (this.notif && responseData.message) {
//                         Notif(this.init, responseData.message, false, this.notif_time)
//                     }
//                     xhr_response(responseData)
//                 }
//             }).catch(async (error) => {
//                 if (error.response && error.response.status === 430) {
//                     // this.refresh_token().then(() => {
//                     this.Get(responseData => {
//                         if (responseData) {
//                             if (this.notif && responseData.message) {
//                                 Notif(this.init, responseData.message, false, this.notif_time)
//                             }
//                             xhr_response(responseData)
//                         }
//                     })
//                     // })
//                 } else {
//                     this.check_status(error)
//                     if (err) {
//                         err(error.response)
//                     }
//                 }
//             })
//         } catch (e) {
//             if (err) {
//                 err(e)
//             }
//         }
//     }

//     Post(xhr_response, err = null, prgDownload = null, prgUpload = null) {
//         this.method = 'post'
//         try {
//             this.log('POST ::: ' + this.base_url, this.data)
//             axios({
//                 method: 'post',
//                 data: this.data,
//                 url: this.base_url,
//                 responseType: 'json',
//                 timeout: this.time_out,
//                 headers: this.headers,
//                 maxRedirects: this.maxRedirects,
//                 withCredentials: true,
//                 credentials: 'same-origin',
//                 onDownloadProgress: prgDownload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     prgDownload(progress)
//                 } : null,
//                 onUploadProgress: prgUpload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                 } : null,

//             }).then(async (response) => {
//                 if (response) {
//                     let responseData = response.data
//                     // this.log('RESPONSE POST '+this.url+' :::  data response = ', responseData)
//                     if (this.notif && responseData.message) {
//                         Notif(responseData.message, false, this.notif_time)
//                     }
//                     xhr_response(responseData)
//                 }
//             }).catch((error) => {
//                 // console.log('errrror' , error)
//                 if (error.response && error.response.status === 430) {
//                     // this.refresh_token().then(() => {
//                     this.Post(responseData => {
//                         if (responseData) {
//                             if (this.notif && responseData.message) {
//                                 Notif(this.init, responseData.message, false, this.notif_time)
//                             }
//                             xhr_response(responseData)
//                         }
//                     })
//                     // })
//                 } else {
//                     this.check_status(error)
//                     if (err) {
//                         err(error.response)
//                     }
//                 }

//             })
//         } catch (e) {
//             if (this.url !== 'mobile_log') {
//                 // func.exeption('err getting'+this.url+' = ' + e)
//                 // console.error(e)
//             } else {
//                 console.error('error mobile log ', e)
//             }
//             return null
//         }
//     }

//     Put(xhr_response, err = null, prgDownload, prgUpload = null) {
//         this.method = 'put'
//         try {
//             this.log('PUT ::: ' + this.base_url, this.data)
//             axios({
//                 method: 'put',
//                 data: this.data,
//                 url: this.base_url,
//                 responseType: 'json',
//                 timeout: this.time_out,
//                 headers: this.headers,
//                 maxRedirects: this.maxRedirects,
//                 withCredentials: true,
//                 credentials: 'same-origin',
//                 onDownloadProgress: prgDownload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     // console.log('downloading .... '  + this.url  + '  ' ,progress)
//                     prgDownload(progress)
//                 } : null,
//                 onUploadProgress: prgUpload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     prgUpload(progress)
//                 } : null

//             }).then((response) => {
//                 let responseData = response.data
//                 this.log('RESPONSE PUT ' + this.url + ' :::  data response = ', responseData)
//                 if (this.notif && responseData.message) {
//                     Notif(responseData.message, false, this.notif_time)
//                 }
//                 xhr_response(responseData)
//             }).catch((error) => {
//                 if (error.response && error.response.status === 430) {
//                     // this.refresh_token().then(() => {
//                     this.Get(responseData => {
//                         if (responseData) {
//                             if (this.notif && responseData.message) {
//                                 Notif(this.init, responseData.message, false, this.notif_time)
//                             }
//                             xhr_response(responseData)
//                         }
//                     })
//                     // })
//                 } else {
//                     this.check_status(error)
//                     if (err) {
//                         err(error.response)
//                     }
//                 }
//             })
//         } catch (e) {
//             if (err) {
//                 err(e)
//             }
//             // func.exeption('err getting ' + this.url + ' = '  +  e )
//         }
//     }

//     Delete(xhr_response, err = null, prgDownload = null, prgUpload = null) {
//         this.method = 'delete'
//         try {
//             this.log('DELETE ::: ' + this.base_url, this.data)
//             axios({
//                 method: 'delete',
//                 data: this.data,
//                 url: this.base_url,
//                 responseType: 'json',
//                 timeout: this.time_out,
//                 headers: this.headers,
//                 maxRedirects: this.maxRedirects,
//                 withCredentials: true,
//                 credentials: 'same-origin',
//                 onDownloadProgress: prgDownload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     // console.log('downloading .... '  + this.url  + '  ' ,progress)
//                     prgDownload(progress)
//                 } : null,
//                 onUploadProgress: prgUpload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     // console.log('uploading .... '  + this.url  + '  ' ,progress)
//                 } : null

//             }).then(async (response) => {
//                 if (response) {
//                     let responseData = response.data
//                     this.log('RESPONSE DELETE ' + this.url + ' ::: data response = ', responseData)
//                     if (this.notif && responseData.note) {
//                         Notif(responseData.note, false, this.notif_time)
//                     }
//                     xhr_response(responseData)
//                 }
//             }).catch((error) => {
//                 if (error.response && error.response.status === 430) {
//                     // this.refresh_token().then(() => {
//                     this.Get(responseData => {
//                         if (responseData) {
//                             if (this.notif && responseData.message) {
//                                 Notif(this.init, responseData.message, false, this.notif_time)
//                             }
//                             xhr_response(responseData)
//                         }
//                     })
//                     // })
//                 } else {
//                     this.check_status(error)
//                     if (err) {
//                         err(error.response)
//                     }
//                 }

//             })
//         } catch (e) {
//             // func.exeption('err getting'+this.url+' = ' + e)
//         }
//     }

//     Abort() {
//         this.source.cancel()
//     }

//     Upload(xhr_response, err = null, prgDownload = null, prgUpload = null) {
//         this.method = 'upload'
//         try {
//             this.log('UPLOAD ::: ', this.base_url + this.url)
//             axios({
//                 method: 'post',
//                 data: this.data,
//                 url: this.base_url,
//                 responseType: 'json',
//                 timeout: this.time_out,
//                 headers: this.headers,
//                 maxRedirects: this.maxRedirects,
//                 withCredentials: true,
//                 credentials: 'same-origin',
//                 cancelToken: this.source.token,
//                 onDownloadProgress: prgDownload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     // console.log('downloading .... '  + this.url  + '  ' ,progress)
//                     prgDownload(progress)
//                 } : null,
//                 onUploadProgress: prgUpload ? (progressEvent) => {
//                     let progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
//                     // console.log('uploading .... '  + this.url  + '  ' ,progress)
//                     prgUpload(progress)
//                 } : null

//             }).then((response) => {
//                 if (response) {
//                     let responseData = response.data
//                     this.log('RESPONSE UPLOAD ' + this.url + ' :::  data response = ', responseData)
//                     if (this.notif && responseData.message) {
//                         Notif(responseData.message, false, this.notif_time)
//                     }
//                     xhr_response(responseData)
//                 }
//             }).catch((error) => {
//                 if (error.response && error.response.status === 430) {
//                     // this.refresh_token().then(() => {
//                     this.Get(responseData => {
//                         if (responseData) {
//                             if (this.notif && responseData.message) {
//                                 Notif(this.init, responseData.message, false, this.notif_time)
//                             }
//                             xhr_response(responseData)
//                         }
//                     })
//                     // })
//                 } else {
//                     this.check_status(error)
//                     if (err) {
//                         err(error.response)
//                     }
//                 }
//             })
//         } catch (e) {
//             // func.exeption('err getting '+this.url+' = ' + e)
//         }
//     }

//     refresh_token() {
//         return new Promise((resolve, reject) => {
//             axios.post(axios.defaults.baseURL + 'refresh', {}, {
//                 withCredentials: true
//             }).then(res => {
//                 resolve()
//             }).catch((err) => {
//                 Notif('Session Expire , please login again', true)
//                 localStorage.clear()
//                 window.location.href = '/auth/login'
//             })
//         })
//     }

//     check_status(error) {
//         try {
//             if (error.response) {
//                 const code = error.response.status
//                 const note = error.response.data.message
//                 if (code === 510) {
//                     return { status: false, code: 510 }
//                 } else if (code === 401 || code === 422) {
//                     Notif('Authentication problem , please login again', true)
//                     localStorage.clear()
//                     window.location.href = '/auth/login'

//                 } else if ((code > 500 && code < 600)) {
//                     if (this.danger_notif) {
//                         Notif('server error', true)
//                     }
//                     // func.exeption({status : code  , url : this.url, note , data : this.data , method : this.method})
//                 } else if (code === 420) {
//                     return
//                 } else if (code === 420) {
//                     return

//                 } else if (code === 400) {
//                     Notif(note, true)
//                 } else if (code === 410) {
//                     return { status: false, code: 410 }
//                 } else {
//                     Notif(note, true)
//                 }
//                 switch (code) {
//                     case 410:
//                         return { status: false, code: 410 }
//                         break
//                     case 411:
//                         return { status: false, code: 411 }
//                         break
//                     default:
//                         return true
//                 }
//             }
//         } catch (e) {
//             // console.log('sdfjslfjsldfsd', e)
//         }
//     }

//     config_data() {

//     }

//     log(text, value = '') {
//         // console.group('request' , this.url)
//         // console.log(this.base_url , this.data)
//         // console.log(text , value)
//         // console.groupEnd()
//     }
// }
