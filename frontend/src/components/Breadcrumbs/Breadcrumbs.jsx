import React from "react";
import { Breadcrumbs as NextUiBreadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ items = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-4">
      <NextUiBreadcrumbs underline="active" className="!p-2 !m-0">
        {items.map((item, index) => (
          <BreadcrumbItem
            key={index}
            isCurrent={item.isCurrent || false}
            onClick={() => item.path && navigate(item.path)}
          >
            {item.label}
          </BreadcrumbItem>
        ))}
      </NextUiBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
