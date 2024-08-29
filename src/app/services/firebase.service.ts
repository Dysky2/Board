import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, query, collection, orderBy, getDocs, setDoc, doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db = getFirestore();

  constructor(private store: AngularFirestore, private http: HttpClient) { }

  private productUrl = 'https://board-92931-default-rtdb.europe-west1.firebasedatabase.app';


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + '/products.json');
  }

  addProduct(productId: string ,data: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl + '/products.json', data)
  }

  async getAllDocumentFromCollection(collectionName: string) {
    onSnapshot(query(collection(this.db, collectionName)), (querySnapshot) => {
      querySnapshot.docChanges().forEach((docs) => {
        return docs.doc.data();
      });
    })
  }

  async createDocument(collectionName: string, documentName: string, data: Object) {
    setDoc(doc(this.db, collectionName, documentName), data);
  }

  updateDocument(collectionName: string, documentId: string, data: any) {
    updateDoc(doc(this.db, collectionName, documentId), data)
  }

  deleteDocument(collectionName: string, documentId: string) {
    deleteDoc(doc(this.db, collectionName, documentId));
  }

    // const q = query(collection(this.db,'tasks'), orderBy('name'))
    // const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) =>  {
    //   this.taskList.push(doc.data() as Task);
    // })

    // this.taskList = this.firebaseServide.getAllDocumentFromCollection('tasks');

}
