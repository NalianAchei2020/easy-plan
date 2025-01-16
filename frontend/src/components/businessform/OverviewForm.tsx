import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';

interface OverviewFormProps {
  data: {
    companyType: string;
    startMonth: string;
    startYear: string;
    industry: string;
    projectTitle: string;
  };
  onUpdate: (data: Partial<OverviewFormProps['data']>) => void;
  onNext: () => void;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Retail',
  'Manufacturing',
  'Services',
  'Other',
];

const OverviewForm: React.FC<OverviewFormProps> = ({
  data,
  onUpdate,
  onNext,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h2>

        <div className="space-y-6">
          {/* Company Type */}
          <div className="space-y-4">
            <Label>Is this a startup or an existing company?</Label>
            <RadioGroup
              value={data.companyType}
              onValueChange={(value: string) =>
                onUpdate({ companyType: value })
              }
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="startup" id="startup" />
                <Label htmlFor="startup">Startup</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existing" id="existing" />
                <Label htmlFor="existing">Existing</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Start Date */}
          <div className="space-y-4">
            <Label>Starting month and year of business</Label>
            <div className="grid grid-cols-2 gap-4">
              <Select
                value={data.startMonth}
                onValueChange={(value: string) =>
                  onUpdate({ startMonth: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month.toLowerCase()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={data.startYear}
                onValueChange={(value: string) =>
                  onUpdate({ startYear: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Industry */}
          <div className="space-y-4">
            <Label>In what industry do you operate?</Label>
            <Select
              value={data.industry}
              onValueChange={(value: string) => onUpdate({ industry: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Title */}
          <div className="space-y-4">
            <Label>Project Title</Label>
            <Input
              value={data.projectTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onUpdate({ projectTitle: e.target.value })
              }
              placeholder="Enter your project title"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default OverviewForm;
