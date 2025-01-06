import { useNavigation } from 'react-router';
import { Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

type SubmitBtnProps = {
  text: string;
  className?: string;
};

const SubmitButton = ({ text, className }: SubmitBtnProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <Button
        type="submit"
        variant="default"
        className={className}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex">
            <ReloadIcon className="mr-2 h4 w-4 animate-spin" />
          </span>
        ) : (
          text
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
