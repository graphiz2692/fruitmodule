import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { orderentry } from './orderentry/orderentry.component';
import { vesselinformation } from './vesselinformation/vesselinformation.component';
import { collectionAdviceModel } from './advicetable/advicetable.component';
import { containerRequest } from './containerrequest/containerrequest.component';
import { VesselInformation } from './vessel-information';
@Injectable({
  providedIn: 'root'
})
export class FreightServiceService {
  constructor(private ht:HttpClient) { }
  getContainerReq():Observable<any>{
    return this.ht.get<any>("http://localhost:3000/containerRequest",{responseType:"json"})
  }
  getContainerMonitoring():Observable<any>{
    return this.ht.get<any>(" http://localhost:3000/containerMonitoring",{responseType:"json"})
  }
  getCollectionAdvice():Observable<any>{
    return this.ht.get<any>("http://localhost:3000/collectionAdvice",{responseType:"json"})
  }
  getOrderEntry():Observable<any>{
return this.ht.get<any>("http://localhost:3000/orderEntry",{responseType:"json"})
  }
  getVesselDetails():Observable<any>{
    return this.ht.get<any>("http://localhost:3000/vessalInfo",{responseType:"json"})
  }

  postVesselDetails(add:vesselinformation):Observable<vesselinformation>{
    return this.ht.post<vesselinformation>("http://localhost:3000/vessalInfo/",add,{responseType:"json"})
  }
 postContainerAdviceDetails(details:collectionAdviceModel):Observable<collectionAdviceModel>{
   return this.ht.post<collectionAdviceModel>("http://localhost:3000/collectionAdviceDetails/",details,{responseType:"json"})
 }
//getting id for edit 
getContainerReqId(id:number):Observable<containerRequest>{
  return this.ht.get<containerRequest>("http://localhost:3000/containerRequest"+'/'+id)
}
updateContainerReq(id:number,data:any){
  return this.ht.put("http://localhost:3000/containerRequest"+'/'+id,data);
}
//getting id for vesselDetails
getEditVesselDetails(id:number):Observable<vesselinformation>{
  return this.ht.get<vesselinformation>("http://localhost:3000/vessalInfo/"+id)
}
updateVesselDetails(id:number,data:any){
  return this.ht.put("http://localhost:3000/vessalInfo"+'/'+id,data);
}
//getid for orderEntry
getEditOrderEntry(id:number):Observable<orderentry>{
  return this.ht.get<orderentry>("http://localhost:3000/orderEntry/"+id)
}
UpdateOrderEntry(id:number,data:any){
  return this.ht.put("http://localhost:3000/orderEntry"+'/'+id,data)
}

}
