import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, query, collection, orderBy, getDocs, setDoc, doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { Product } from '../interfaces/product';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db = getFirestore();

  private baseUrl = 'https://board-92931-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private store: AngularFirestore, private http: HttpClient) { }

  addProduct(productId: string ,data: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + '/products.json', data)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/users.json', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users.json');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/products.json');
  }
  
  getUser(userId: string) {``
    return this.http.get<User>(this.baseUrl + '/users/' + userId + '.json')
  }

  getCart(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/users/${userId}/cart.json`)
  }

  addProductToUser(userId: string, product: Product, amount: number, productId: string) {
    return this.http.post<Product>(`${this.baseUrl}/users/${userId}/cart.json`, {[productId]: product, amount: amount});
  }

  findProductId(allProducts: Product[], productId: string) {
    return Object.keys(allProducts)[
      Object.values(allProducts)
      .indexOf(Object.values(allProducts)
      .filter((product: Product) => product.productId === productId)[0])
    ]
  }


  // switchMap(products => Object.keys(products)[ Object.values(products).indexOf( Object.values(products).filter((product) => product.id === productId)[0] ) ]),


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
function indexOf(arg0: Product[]) {
  throw new Error('Function not implemented.');
}

