import rolesData from '@/constant/roles';
import { NextRequest, NextResponse } from 'next/server';

type Route = {
  params: {
    slug: string;
  };
};

export const GET = (request: NextRequest, { params }: Route) => {
  console.log(params);
  const role = rolesData.find((role) => role.slug === params.slug);
  return NextResponse.json(role);
};
