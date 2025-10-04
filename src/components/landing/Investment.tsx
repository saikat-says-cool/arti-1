"use client";

import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Investment = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-20 bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Investment</h2>
        </div>
        <Card className="max-w-2xl mx-auto mt-12">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>AUD Range</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Setup Fee</TableCell>
                  <TableCell>$2,500 – $5,000</TableCell>
                  <TableCell>3-Day Build Process</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Monthly Optimization</TableCell>
                  <TableCell>$3,000 – $4,500</TableCell>
                  <TableCell>Full system management</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Performance Bonus (optional)</TableCell>
                  <TableCell>By results</TableCell>
                  <TableCell>Shared upside option</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-lg text-muted-foreground">
          Half the cost of a junior SDR and far more predictable.
        </p>
      </div>
    </motion.section>
  );
};

export default Investment;