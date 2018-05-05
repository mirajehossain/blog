export interface PostType {
  id?:number,
  title?:string,
  ctitle?:string,
  category_id?:string,
  description?:string,
  author?:string,
  date?:string,
  picture?:string

}

export interface CategoryType{
  id?:number,
  title?:string
}

export interface AuthorType{
  title?:string,
  quotes?:string,
  description?:string
}
