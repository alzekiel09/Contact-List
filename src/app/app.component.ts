import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  firstName: string;
  lastName: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  contact: any;

  firstName: string;
  lastName: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('contact');
    this.contact = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }

  addPost() {
    this.afs.collection('contact').add({'firstName': this.firstName,'lastName': this.lastName,'phone': this.phone,
	'mobile': this.mobile, 'email': this.email,'address': this.address
	});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('contact/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('contact/'+postId).delete();
  }
}