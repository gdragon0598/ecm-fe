export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    sale: number;
    numberSoldItems: number;
    isNew: boolean;
    rating: number;
}

// export interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
//     categoryId : number;
//     brandId : number;
//     category: string;
//     brand: string;
//     imageUrl: string;
//     sale: number;
//     supplierId: number,
//     isNew: boolean;
//     numberSoldItems: number;
//     total: number;
//     rating: number;
//     productDetail: {
//         productImage: Array<string>;

// }


    
//     "categoryId": 20,
//     "brandId": 29,
//     "category": "Đồ chơi - Mẹ và bé",
//     "brand": "LOGITECH",
//     "imageUrl": "https://salt.tikicdn.com/cache/750x750/ts/product/f3/76/3b/646f9aec3ca3d7398133ae0851a98a83.jpg.webp",
//     "sale": 0,
//     "supplierId": 3,
//     "isNew": true,
//     "numberSoldItems": 0,
//     "total": 10,
//     "productDetail": {
//         "productImage": [
//             {
//                 "imageUrl": "test url 9:18"
//             },
//             {
//                 "imageUrl": "test url 9:18"
//             }
//         ],
//         "description": "test description 9:18",
//         "additionalInformation": "test additionalInformation 9:18"
//     },
//     "commentList": [
//         {
//             "id": 2,
//             "commentText": "Test sub comment text",
//             "rating": null,
//             "createdAt": "2023-07-31T01:37:44.296+00:00",
//             "subComment": [],
//             "userFullName": "leminh huan"
//         },
//         {
//             "id": 1,
//             "commentText": "Test comment text",
//             "rating": 4,
//             "createdAt": "2023-07-31T01:37:13.830+00:00",
//             "subComment": [
//                 {
//                     "id": 2,
//                     "commentText": "Test sub comment text",
//                     "rating": null,
//                     "createdAt": "2023-07-31T01:37:44.296+00:00",
//                     "subComment": [],
//                     "userFullName": "leminh huan"
//                 }
//             ],
//             "userFullName": "leminh huan"
//         }
//     ]