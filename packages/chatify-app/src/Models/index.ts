export type MessageSchema = {
     readBy:    any[];
     _id:       string;
     sender:    Sender;
     content:   string;
     chat:      string;
     createdAt: Date;
     updatedAt: Date;
     isGroupChat?:boolean;
     __v:       number;
 }
 
 export type Sender = {
     pic:  string;
     _id:  string;
     name: string;
 }
 