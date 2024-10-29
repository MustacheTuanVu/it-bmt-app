"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";

interface Company {
  _id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  review: string;
  recruitmentPosts: string[];
}

export default function Company() {

  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetch('/api/companies')
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tên</TableHead>
          <TableHead>Địa chỉ</TableHead>
          <TableHead>Số điện thoại</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Facebook</TableHead>
          <TableHead>Review</TableHead>
          <TableHead>Tin tuyển dụng</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((invoice) => (
          <TableRow key={invoice._id}>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.address}</TableCell>
            <TableCell>{invoice.phone}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>
              <a href={invoice.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </TableCell>
            <TableCell>{invoice.review}</TableCell>
            <TableCell>
              {invoice.recruitmentPosts.map((post, index) => (
                <div key={index}>{post}</div>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
