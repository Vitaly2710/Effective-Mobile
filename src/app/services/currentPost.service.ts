import {Injectable} from "@angular/core";
import {startPost} from "../shared/config";
import {Posts} from "../store/interfaces";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CurrentPostService {

  p = new BehaviorSubject(startPost)

  post: Posts = startPost;

  getPost() {
    return this.p.value
  }

  setPost(elem: Posts) {
    this.p.next(elem)
  }

}
