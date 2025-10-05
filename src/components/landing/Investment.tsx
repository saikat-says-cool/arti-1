"use client";

import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const Investment = () => {
  return (
    <motion.section
      id="investment"
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
        <Card className="max-w-4xl mx-auto mt-12">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Component</TableHead>
                    <TableHead className="font-bold">USD Range</TableHead>
                    <TableHead className="font-bold">What It Covers / When It Applies</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Setup Fee</TableCell>
                    <TableCell>$2,500 – $5,000</TableCell>
                    <TableCell>Complete 3-Day Build Process. Higher end for multi-domain or multi-brand installs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Optimization</TableCell>
                    <TableCell>$3,000 – $4,500</TableCell>
                    <TableCell>Full system management, deliverability care, list refresh & AI prompt tuning. Scales with volume.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Performance Bonus (optional)</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell>Usually a per-qualified-meeting fee or shared revenue % for closed clients. Details set in advance.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
          Typical agencies launch at ≈ USD 3k setup + 3k monthly—roughly half the cost of a single in-house SDR.
        </p>
      </div>
    </motion.section>
  );
};

export default Investment;