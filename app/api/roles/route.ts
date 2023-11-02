import rolesData from '@/constant/roles';
import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json(rolesData);
};
